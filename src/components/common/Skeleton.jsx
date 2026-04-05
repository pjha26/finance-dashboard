export const Skeleton = ({ className = '' }) => (
    <div className={`animate-pulse rounded-md bg-secondary/60 ${className}`} />
);

export const DashboardSkeleton = () => (
    <div className="flex flex-col gap-8 pb-16">
        {/* Header */}
        <div>
            <Skeleton className="h-9 w-44 mb-2" />
            <Skeleton className="h-4 w-60" />
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-32 rounded-2xl" />
            <Skeleton className="h-32 rounded-2xl" />
            <Skeleton className="h-32 rounded-2xl" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Skeleton className="h-[420px] rounded-2xl lg:col-span-2" />
            <Skeleton className="h-[420px] rounded-2xl lg:col-span-1" />
        </div>

        {/* Insights */}
        <div>
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Skeleton className="h-28 rounded-2xl" />
                <Skeleton className="h-28 rounded-2xl" />
            </div>
        </div>
    </div>
);

export const TransactionsSkeleton = () => (
    <div className="flex flex-col gap-6 pb-16">
        <div className="flex justify-between items-start">
            <div>
                <Skeleton className="h-9 w-44 mb-2" />
                <Skeleton className="h-4 w-60" />
            </div>
            <Skeleton className="h-10 w-36 hidden md:block rounded-lg" />
        </div>
        <div className="flex gap-3">
            <Skeleton className="h-11 flex-1 rounded-lg" />
            <Skeleton className="h-11 w-40 rounded-lg" />
        </div>
        <Skeleton className="h-80 rounded-xl" />
    </div>
);
