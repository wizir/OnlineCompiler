using Reinforced.Typings.Attributes;

namespace OnlineCompiler.Model
{
    [TsInterface]
    public class ProgrammingLanguage
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DefaultProgram { get; set; }
    }
}
