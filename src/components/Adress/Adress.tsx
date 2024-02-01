import "./Adress.scss";

interface AddressProps {
  country: string;
  kind: string;
  mail: string;
  phone?: string;
  street?: string;
  city?: string;
}

const Address = (props: AddressProps) => {
    const { country, kind, mail, phone, street, city } = props;
    return (
        <div className="country">
        <p className="countryName">{country}</p>
        <p className="kind">{kind}</p>
        <p><span className="infos">{mail}</span> | <span className="infos">{phone}</span></p>
        <p className="kind">Address</p>
        <p className="infos">{street}</p>
        <p className="infos">{city}</p>
        </div>
    );
};

export default Address;
