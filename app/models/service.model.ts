export interface ServiceModel {
    id: string,
    title: string,
    description: string,
    image: string,
    service?: ServiceModel
}
