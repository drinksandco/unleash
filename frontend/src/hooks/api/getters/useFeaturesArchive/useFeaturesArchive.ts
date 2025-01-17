import useSWR from 'swr';
import { FeatureSchema, FeaturesSchema } from 'openapi';
import handleErrorResponses from '../httpErrorResponseHandler';

export interface IUseFeaturesArchiveOutput {
    archivedFeatures?: FeatureSchema[];
    refetchArchived: () => void;
    loading: boolean;
    error?: Error;
}

const fetcher = (path: string) => {
    return fetch(path)
        .then(handleErrorResponses('Feature toggle archive'))
        .then(res => res.json());
};

export const useFeaturesArchive = (
    projectId?: string
): IUseFeaturesArchiveOutput => {
    const { data, error, mutate, isLoading } = useSWR<FeaturesSchema>(
        projectId
            ? `/api/admin/archive/features/${projectId}`
            : 'api/admin/features',
        fetcher,
        {
            refreshInterval: 15 * 1000, // ms
        }
    );

    return {
        archivedFeatures: data?.features,
        refetchArchived: mutate,
        loading: isLoading,
        error,
    };
};
