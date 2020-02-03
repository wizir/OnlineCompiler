using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Moq;
using NUnit.Framework;
using OnlineCompiler.Utilities;

namespace OnlineCompiler.Tests
{
    public class HttpContextExtensionsTests
    {

        [Test]
        public void AddScript_CanAddItems()
        {
            var context = new DefaultHttpContext();
            
            context.AddScript("script1");
            context.AddScript("script2");

            var values = (HashSet<string>)context.Items.First().Value;
            
            Assert.AreEqual(2, values.Count);
        }
        
        
        [Test]
        public void AddStylesheet_CanAddItems()
        {
            var context = new DefaultHttpContext();
            
            context.AddStylesheet("stylesheet1");
            context.AddStylesheet("stylesheet2");

            var values = (HashSet<string>)context.Items.First().Value;
            
            Assert.AreEqual(2, values.Count);
        }
        
        
        [Test]
        public void AddScripts_AddsDistinctItems()
        {
            var context = new DefaultHttpContext();
            
            context.AddStylesheet("stylesheet1");
            context.AddStylesheet("stylesheet2");
            context.AddStylesheet("stylesheet2");

            var values = (HashSet<string>)context.Items.First().Value;
            
            Assert.AreEqual(2, values.Count);
        }

        
        [Test]
        public void AddStylesheet_AddsDistinctItems()
        {
            var context = new DefaultHttpContext();
            
            context.AddStylesheet("stylesheet1");
            context.AddStylesheet("stylesheet2");
            context.AddStylesheet("stylesheet2");

            var values = (HashSet<string>)context.Items.First().Value;
            
            Assert.AreEqual(2, values.Count);
        }


        [Test]
        public void RenderScripts_UsesAssetsResolver()
        {
            var assetsResolverMock = new Mock<IWebpackAssetsResolver>();
            
            assetsResolverMock
                .Setup(m => m
                    .GetScriptTag(It.IsAny<string>()))
                .Returns<string>(s => $"<script>{s}</script>");

            var context = new DefaultHttpContext();
            context.RegisterWebpackAssetsResolver(assetsResolverMock.Object);      
            context.AddScript("alamakota");

            var result = context.RenderScripts();
            
            Assert.AreEqual("<script>alamakota</script>", result.Value.Trim());
        }

        
        [Test]
        public void RenderStylesheets_UsesAssetsResolver()
        {
            var assetsResolverMock = new Mock<IWebpackAssetsResolver>();
            
            assetsResolverMock
                .Setup(m => m
                    .GetStylesheetTag(It.IsAny<string>()))
                .Returns<string>(s => $"<link href={s}/>");

            var context = new DefaultHttpContext();
            context.RegisterWebpackAssetsResolver(assetsResolverMock.Object);      
            context.AddStylesheet("stylesheet");

            var result = context.RenderStylesheets();
            
            Assert.AreEqual("<link href=stylesheet/>", result.Value.Trim());
        }

        [Test]
        public void RegisterWebpackAssetsResolver_RegistersOnlyForSingleContext()
        {
            var assetsResolverMock = new Mock<IWebpackAssetsResolver>();
            
            assetsResolverMock
                .Setup(m => m
                    .GetStylesheetTag(It.IsAny<string>()))
                .Returns<string>(s => s);

            var unregisteredContext = new DefaultHttpContext();
            var registeredContext = new DefaultHttpContext();
            
            registeredContext.RegisterWebpackAssetsResolver(assetsResolverMock.Object);      
            registeredContext.AddStylesheet("stylesheet");
            registeredContext.AddScript("script");

            var registeredStylesheets = registeredContext.RenderStylesheets();
            var registeredScripts = registeredContext.RenderScripts();

            var unregisteredStylesheets = unregisteredContext.RenderStylesheets();
            var unregisteredScripts = unregisteredContext.RenderScripts();

            Assert.IsNotEmpty(registeredScripts.Value);
            Assert.IsNotEmpty(registeredStylesheets.Value);
            
            Assert.IsEmpty(unregisteredScripts.Value);
            Assert.IsEmpty(unregisteredStylesheets.Value);
        }
    }
}
