using Reinforced.Typings.Attributes;

namespace OnlineCompiler.Model
{
    // [TsInterface] removed untill Reinforced.Typings supports .net core 3.1.1
    public class Language
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FileName { get; set; }
        public string DefaultProgram { get; set; }
    }
}
