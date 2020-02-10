using System.Collections.Generic;

namespace OnlineCompiler.Model
{
    public class SolutionModel
    {
        public string Name { get; set; }
        public IEnumerable<ProjectModel> Projects { get; set; }
    }
}
