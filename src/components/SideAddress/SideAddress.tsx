import "./SideAddress.scss";

interface AddressProps {
  country: string;
  kind: string;
  mail: string;
  phone?: string;
  street?: string;
  city?: string;
  mapUrl?: string;
}

const Address = (props: AddressProps) => {
    const { country, kind, mail, phone, street, city, mapUrl } = props;
    return (
        <div className="country">
          <p className="countryName">{country}</p>
          <p className="kind">{kind}</p>
          <p><span className="infos"><a href={"mailto:" + mail}>{mail}</a></span> | <span className="infos"><a href={"tel:" + phone}>{phone}</a></span></p>
          {street && city && mapUrl && (
            <>
            <a href={mapUrl}>
              <p className="kind">Address</p>
              <p className="infos">{street}</p>
              <p className="infos">{city}</p>
            </a>
            </>
            )}
        </div>
    );
};

export default Address;
