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
        private string _localIp;
        
        public WebpackAssetsResolver(IWebHostEnvironment env, IIpAddressResolver ipAddressResolver)
        {
            _env = env;
            
            _localIp = _env.IsDevelopment() ? ipAddressResolver.GetLocalAddress().ToString() : null;
            
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
            if (_assets.TryGetValue(name, out var asset))
            {
                if (_env.IsDevelopment())
                {
                    return $"<script src=\"https://{_localIp}:8080/{asset.Js}\"></script>";
                    
                }
                return $"<script src=\"{asset.Js}\"></script>";
            }
            
            throw new KeyNotFoundException($"Entry \"{name}\" not registered in webpack.config");
        }

        public string GetStylesheetTag(string name)
        {
            if (_assets.TryGetValue(name, out var asset))
            {

                if (_env.IsDevelopment())
                {
                    return $"<script src=\"https://{_localIp}:8080/{asset.Js}\"></script>";
                }

                return $"<link rel=\"stylesheet\" href=\"{asset.Css}\"></script>";
            }

            throw new KeyNotFoundException($"Entry \"{name}\" not registered in webpack.config");
        }

        
        private class WebpackAssetsEntry
        {
            public string Js { get; set; }
            public string Css { get; set; }
        }
    }
}
