using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileSystemGlobbing;
using Newtonsoft.Json;
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
            foreach (var languageDir in _env.WebRootFileProvider
                .GetDirectoryContents("lang_desc")
                .Where(d => d.IsDirectory))
            {
                var files = Directory.GetFiles(languageDir.PhysicalPath).ToList();

                var descriptorFile = files.Single(f => f.EndsWith("descriptor.json"));
                var programFile = files.Single(f => f.EndsWith("descriptor.json") == false);
                
                var language = JsonConvert.DeserializeObject<Language>(ReadFile(descriptorFile));

                language.DefaultProgram = ReadFile(programFile);
                language.FileName = Path.GetFileName(programFile);

                yield return language;
            }
        }

        private static string ReadFile(string path)
        {
            using var stream = new FileStream(path, FileMode.Open, FileAccess.Read);
            using var reader = new StreamReader(stream);

            return reader.ReadToEnd();

        }
    }
}
