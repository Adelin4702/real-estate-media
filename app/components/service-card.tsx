import {ServiceModel} from "../models/service.model";

type Props = {
    service: ServiceModel;
};

export default function ServiceCard({service}: Props) {
    return (
        <div>
            <h1>{service.title}</h1>
            <br/>
        </div>
    );
}