using AutoMapper;
using Domain;
using WebModels;

namespace Services.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Course, CourseViewModel>();
        }
    }
}
