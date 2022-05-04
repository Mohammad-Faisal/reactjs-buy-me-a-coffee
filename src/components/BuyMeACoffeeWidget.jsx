import React from "react";

const userName = "mohammadfaisal";

function BuyMeACoffeeWidget() {
  const path = `https://www.buymeacoffee.com/widget/page/${userName}?description=Support%20me%20on%20Buy%20me%20a%20coffee!&color=%235F7FFF`;

  return (
    <div>
      <iframe style={{ height: "700px" }} src={path} />
    </div>
  );
}

export default BuyMeACoffeeWidget;
