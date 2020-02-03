using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Http;

namespace OnlineCompiler.Utilities
{
    public static class HttpContextExtensions
    {
        private const string Stylesheet = "stylesheet";
        private const string Script = "script";
        private const string AssetsResolver = "assetsresolver";
        
        /// <summary>
        /// This method has to be called before <see cref="RenderScripts"/> and <see cref="RenderStylesheets"/>
        /// </summary>        
        public static void RegisterWebpackAssetsResolver(this HttpContext context, IWebpackAssetsResolver resolver)
        {
            context.Items[AssetsResolver] = resolver;
        }
        
        
        public static void AddStylesheet(this HttpContext context, string name)
        {
            var hashSet = context.Items[Stylesheet] as HashSet<string> ?? new HashSet<string>();

            hashSet.Add(name);

            context.Items[Stylesheet] = hashSet;
        }

        
        public static void AddScript(this HttpContext context, string name)
        {
            
            var hashSet = context.Items[Script] as HashSet<string> ?? new HashSet<string>();

            hashSet.Add(name);

            context.Items[Script] = hashSet;
        }

        
        public static HtmlString RenderScripts(this HttpContext context)
        {
            var builder = new StringBuilder();
            
            if (context.Items[Script] is HashSet<string> set)
            {
                foreach (var script in set)
                {
                    var resolver = context.Items[AssetsResolver] as IWebpackAssetsResolver;
                    builder.AppendLine(resolver?.GetScriptTag(script));
                }
            }

            return new HtmlString(builder.ToString());
        }
        
        
        public static HtmlString RenderStylesheets(this HttpContext context)
        {
            var builder = new StringBuilder();
            
            if (context.Items[Stylesheet] is HashSet<string> set)
            {
                foreach (var stylesheet in set)
                {
                    var resolver = context.Items[AssetsResolver] as IWebpackAssetsResolver;
                    builder.AppendLine(resolver?.GetStylesheetTag(stylesheet));
                }

            }
            
            return new HtmlString(builder.ToString());
        }
    }
}
