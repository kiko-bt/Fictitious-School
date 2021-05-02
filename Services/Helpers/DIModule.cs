using Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;
using Persistence.Repositories;

namespace Services.Helpers
{
    public static class DIModule
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection services, IConfiguration config)
        {
     
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });


            services.AddTransient<IRepository<Course>, CourseRepository>();

            return services;
        }
    }
}
