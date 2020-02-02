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
        private static IWebpackAssetsResolver _assetsResolver;
        
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

        public static void RegisterWebpackAssetsResolver(this HttpContext context, IWebpackAssetsResolver resolver)
        {
            _assetsResolver = resolver;
        }
        
        
        public static HtmlString RenderScripts(this HttpContext context)
        {
            if (context.Items[Script] is HashSet<string> set)
            {
                var builder = new StringBuilder();
                foreach (var script in set)
                {
                    builder.AppendLine(_assetsResolver.GetScriptTag(script));
                }

                return new HtmlString(builder.ToString());
            }

            return null;
        }
        
        
        public static HtmlString RenderStylesheets(this HttpContext context)
        {
            if (context.Items[Stylesheet] is HashSet<string> set)
            {
                var builder = new StringBuilder();
                foreach (var stylesheet in set)
                {
                    builder.AppendLine(_assetsResolver.GetStylesheetTag(stylesheet));
                }

                return new HtmlString(builder.ToString());
            }

            return null;
        }
    }
}
