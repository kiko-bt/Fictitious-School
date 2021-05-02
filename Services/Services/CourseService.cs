using AutoMapper;
using Domain;
using Persistence.Repositories;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using WebModels;

namespace Services.Services
{
    public class CourseService : ICourseService
    {
        protected readonly IRepository<Course> _courseRepository;
        protected readonly IMapper _mapper;

        public CourseService(IRepository<Course> courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public IEnumerable<CourseViewModel> GetAllCourses()
        {
            IEnumerable<Course> courses = _courseRepository.GetAll();
            List<CourseViewModel> mappedCourses = _mapper.Map<List<CourseViewModel>>(courses);

            return mappedCourses;
        }

        public CourseViewModel GetCourseById(Guid id)
        {
            try
            {
                Course course = _courseRepository.GetAll()
                                                 .Where(x => x.Id == id)
                                                 .SingleOrDefault();

                CourseViewModel mappedCourses = _mapper.Map<CourseViewModel>(course);

                return mappedCourses;
            }
            catch (Exception ex)
            {
                string message = ex.Message;
                throw new Exception(message);
            }
        }
    }
}
