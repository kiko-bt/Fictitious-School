namespace Persistence.Repositories
{
    public abstract class BaseRepository
    {
        protected readonly DataContext _db;

        public BaseRepository(DataContext db)
        {
            _db = db;
        }
    }
}
