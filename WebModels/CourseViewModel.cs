using System;

namespace WebModels
{
    public class CourseViewModel
    {
        public Guid Id { get; set; }
        public DateTime Date { get; set; }
        public string CompanyName { get; set; }
        public long CompanyPhoneNumber { get; set; }
        public string CompanyEmail { get; set; }
    }
}
