using Microsoft.AspNetCore.Hosting;

namespace OnlineCompiler.Utilities
{
    public interface IWebpackAssetsResolver
    {
        string GetScriptTag(string name);
        string GetStylesheetTag(string name);
    }
    
    public class WebpackAssetsResolver : IWebpackAssetsResolver
    {
        private IWebHostEnvironment _env;
        public WebpackAssetsResolver(IWebHostEnvironment env)
        {
            _env = env;
        }
        
        
        public string GetScriptTag(string name)
        {
            throw new System.NotImplementedException();
        }

        public string GetStylesheetTag(string name)
        {
            throw new System.NotImplementedException();
        }
    }
}