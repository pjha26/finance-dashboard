/* Skeleton uses the custom .skeleton CSS class defined in index.css
   which uses a shimmer gradient animation — much smoother than animate-pulse */

export const Skeleton = ({ className = '' }) => (
    <div className={`skeleton ${className}`} />
);

export const DashboardSkeleton = () => (
    <div className="flex flex-col gap-8 pb-16">
        <div>
            <Skeleton className="h-9 w-44 mb-3 rounded-xl" />
            <Skeleton className="h-4 w-64 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="h-32 rounded-2xl" />
            <Skeleton className="h-32 rounded-2xl" />
            <Skeleton className="h-32 rounded-2xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Skeleton className="h-[420px] rounded-2xl lg:col-span-2" />
            <Skeleton className="h-[420px] rounded-2xl lg:col-span-1" />
        </div>

        <div>
            <Skeleton className="h-6 w-32 mb-4 rounded-lg" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Skeleton className="h-32 rounded-2xl" />
                <Skeleton className="h-32 rounded-2xl" />
            </div>
        </div>
    </div>
);

export const TransactionsSkeleton = () => (
    <div className="flex flex-col gap-6 pb-16">
        <div className="flex justify-between items-start">
            <div>
                <Skeleton className="h-9 w-44 mb-3 rounded-xl" />
                <Skeleton className="h-4 w-60 rounded-lg" />
            </div>
            <Skeleton className="h-10 w-40 hidden md:block rounded-xl" />
        </div>
        <div className="flex gap-3">
            <Skeleton className="h-11 flex-1 rounded-xl" />
            <Skeleton className="h-11 w-44 rounded-xl" />
        </div>
        <Skeleton className="h-96 rounded-2xl" />
    </div>
);
