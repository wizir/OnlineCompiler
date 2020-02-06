using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OnlineCompiler.Features;
using OnlineCompiler.Model;

namespace OnlineCompiler.Api
{
    public class LanguagesApiController : Controller
    {
        private readonly ILanguagesProvider _provider;

        public LanguagesApiController(ILanguagesProvider provider)
        {
            _provider = provider;
        }
        
        [Route("/api/languages")]
        public IEnumerable<Language> GetAvailableProgrammingLanguages()
        {
            return _provider.GetAvailable();
        }
    }
}
