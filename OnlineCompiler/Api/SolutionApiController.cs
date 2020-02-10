using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using OnlineCompiler.Model;

namespace OnlineCompiler.Api
{
    public class SolutionApiController : Controller
    {
        public SolutionModel CreateNewSolution()
        {
            return new SolutionModel
            {
                Projects = new List<ProjectModel>
                { 
                    new ProjectModel
                    {
                        Name = "Project1"
                    }
                }
            };
        }
    }
}
