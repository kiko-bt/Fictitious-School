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

        public void Insert(Course entity)
        {
            _db.Courses.Add(entity);
            _db.SaveChanges();
        }

        public void Delete(Course entity)
        {
            _db.Courses.Remove(entity);
            _db.SaveChanges();
        }

        public void Update(Course entity)
        {
            _db.Courses.Update(entity);
            _db.SaveChanges();
        }
    }
}
