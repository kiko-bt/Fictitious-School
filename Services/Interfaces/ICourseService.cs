using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebModels;

namespace Services.Interfaces
{
    public interface ICourseService
    {
        IEnumerable<CourseViewModel> GetAllCourses();
        CourseViewModel GetCourseById(Guid id);
    }
}
