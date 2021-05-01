using Domain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Persistence.Repositories
{
    public class CourseRepository : BaseRepository, IRepository<Course>
    {
        public CourseRepository(DataContext context) : base(context) { }

        public IEnumerable<Course> GetAll()
        {
            return _db.Courses;
        }

        public Course GetById(Guid id)
        {
            return _db.Courses.SingleOrDefault(x => x.Id == id);
        }

        public int Insert(Course entity)
        {
             _db.Courses.Add(entity);
            return _db.SaveChanges();
        }

        public int Update(Course entity)
        {
            _db.Courses.Update(entity);
            return _db.SaveChanges();
        }

        public int Delete(Guid id)
        {
            Course course = _db.Courses.SingleOrDefault(x => x.Id == id);

            if (course == null)
                return -1;

            _db.Courses.Remove(course);
            return _db.SaveChanges();
        }

    }
}
