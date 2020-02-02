using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;

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
        private IReadOnlyDictionary<string, WebpackAssetsEntry> _assets;
        public WebpackAssetsResolver(IWebHostEnvironment env)
        {
            _env = env;
            var fileName = "webpack-assets.json";
            var fileInfo = _env.WebRootFileProvider.GetFileInfo(fileName);

            if (fileInfo.Exists == false || fileInfo.IsDirectory)
            {
                throw new FileNotFoundException($"{fileName} not found in {_env.WebRootPath}.");
            }

            using var stream = fileInfo.CreateReadStream();
            using var reader = new StreamReader(stream);

            _assets = JsonConvert.DeserializeObject<IReadOnlyDictionary<string, WebpackAssetsEntry>>(reader.ReadToEnd());
        }
        
        
        public string GetScriptTag(string name)
        {
            if (_env.IsDevelopment())
            {
                return $"<script src=\"https://localhost:8080/{_assets[name].Js}\"></script>";
            }
            
            return $"<script src=\"{_assets[name].Js}\"></script>";
        }

        public string GetStylesheetTag(string name)
        {
            if (_env.IsDevelopment())
            {
                return $"<script src=\"https://localhost:8080/{_assets[name].Js}\"></script>";
            }
            
            return $"<link rel=\"stylesheet\" href=\"{_assets[name].Css}\"></script>";
        }

        private class WebpackAssetsEntry
        {
            public string Js { get; set; }
            public string Css { get; set; }
        }
    }
}
