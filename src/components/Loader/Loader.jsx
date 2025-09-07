import { PulseLoader } from "react-spinners";

const override = {
  margin: "20px auto",
  textAlign: "center",
  display: "block",
};

export default function Loader() {
  return (
    <PulseLoader
      color="darkblue"
      loading={true}
      cssOverride={override}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
