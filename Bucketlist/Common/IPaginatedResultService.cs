using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bucketlist.Common
{
    public interface IPaginatedResultService
    {
        PaginatedResult<T> PaginateRecords<T, W>(int page, int pageSize, IEnumerable<W> records, Func<IEnumerable<W>, IEnumerable<T>> modelProcessorDelegate)
           where T : class;
        Task<PaginatedResult<T>> PaginateRecordsAsync<T, W>(int page, int pageSize, IEnumerable<W> records, Func<IEnumerable<W>, Task<IEnumerable<T>>> modelProcessorDelegate)
           where T : class;

        PaginatedResult<T> PaginateRecords<T, W>(int page, int pageSize, IEnumerable<W> records)
           where T : class
           where W : class;
    }
}
