using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Courses.Any()) return;

            var courses = new List<Course>
            {
                new Course
                {
                    Date = DateTime.Now.AddMonths(-2),
                    CompanyName = "Marriott International",
                    CompanyEmail = "customer.care@marriott.com",
                    CompanyPhoneNumber = 025102510L,
                },
                new Course
                {
                    Date = DateTime.Now.AddMonths(-1),
                    CompanyName = "Alkaloid",
                    CompanyEmail = " alkaloid@alkaloid.com.mk",
                    CompanyPhoneNumber =  023104014L,
                },
                new Course
                {
                    Date = DateTime.Now.AddMonths(-3),
                    CompanyName = "Teteks",
                    CompanyEmail = "teteks@teteks.com.mk",
                    CompanyPhoneNumber =  02312206L,
                }
            };

            await context.Courses.AddRangeAsync(courses);
            await context.SaveChangesAsync();
        }
    }
}