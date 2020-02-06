using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OnlineCompiler.Model;

namespace OnlineCompiler.Api
{
    public class LanguagesApiController : Controller
    {

        [Route("/api/languages")]
        public IEnumerable<ProgrammingLanguage> GetAvailableProgrammingLanguages()
        {
            return new[] {new ProgrammingLanguage()};
        }
    }
}
