using System.Collections.Generic;

namespace OnlineCompiler.Model
{
    public class DirectoryModel
    {
        public string Name { get; set; }

        public IEnumerable<DirectoryModel> Directories { get; set; }
        public IEnumerable<FileModel> Files { get; set; }
    }
}
