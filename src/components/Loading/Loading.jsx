import { Grid } from "@chakra-ui/react";
import { CENTER, FILL_PARENT, FIXED, WHITE } from "../../constants/typography";
import Lottie from "react-lottie";

export default function Loading() {
  function config(url) {
    return {
      loop: true,
      autoplay: true,
      path: url,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }

  return (
    <Grid
      placeItems={CENTER}
      position={FIXED}
      bg={WHITE}
      w={FILL_PARENT}
      h={"100vh"}
    >
      <Lottie
        options={config(
          "https://assets3.lottiefiles.com/packages/lf20_kxsd2ytq.json"
        )}
        height={300}
        width={300}
      />
    </Grid>
  );
}
