using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using OnlineCompiler.Model;

namespace OnlineCompiler.Features
{
    public interface ILanguagesProvider
    {
        IEnumerable<Language> GetAvailable();
    }

    public class LanguagesesProvider : ILanguagesProvider
    {
        private readonly IWebHostEnvironment _env;

        public LanguagesesProvider(IWebHostEnvironment env)
        {
            _env = env;
        }
        
        public IEnumerable<Language> GetAvailable()
        {
            var path = _env.ContentRootPath;
            
            
            return null;
        }
    }
}
