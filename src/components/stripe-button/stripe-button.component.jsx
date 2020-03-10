import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeCheckoutButton({ currentUser, price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_NlI0UzB8uRJ1s0lECLdgMney004Q87nk40";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  // return (
  //   <StripeCheckout
  //     label="Pay Now"
  //     name="CRWN Cloothing Ltd."
  //     image="https://svgshare.com/i/CUz.svg"
  //     description={`Your total is $${price}`}
  //     amount={priceForStripe}
  //     panelLabel="Pay Now"
  //     token={onToken}
  //     stripeKey={publishableKey}
  //   ></StripeCheckout>
  // );
  return (
    <a
      without
      rel="noopener noreferrer"
      style={{ width: "10rem", marginBottom: "1rem" }}
      target="_blank"
      href={`http://ec2-3-226-29-78.compute-1.amazonaws.com:3456/v1/paymentButton/?name=CRWN Clothing Ltd.&amount=${price}&businessKey=B-TdbRvHYA5pD2&customerName=${currentUser?.displayName ||
        ""}&customerEmail=${currentUser?.email ||
        ""}&isAmountFixed=true&acceptedCurrencies=btc,eth,ltc,xrp&description=Your total is ₦${price}&useCurrenciesInWalletSettings=false`}
    >
      <svg
        width="170"
        height="68"
        viewBox="0 0 170 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="15" y="48" width="20" height="20" rx="2" fill="#FFE9BF" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.684 55.2113L25.6822 54L24.9169 54.0017L24.9187 55.181C24.7176 55.1815 24.5119 55.1858 24.3076 55.1901L24.3059 54.003L23.5411 54.0046L23.5426 55.2155C23.377 55.2191 23.2143 55.2224 23.0556 55.2229L22 55.221L22.0014 56.0084C22.0014 56.0084 22.5665 55.9969 22.5571 56.0069C22.8671 56.0063 22.9683 56.1795 22.9978 56.329L23 57.7089C23.0214 57.709 23.0493 57.7098 23.0809 57.7139C23.0554 57.714 23.0281 57.7139 23.0001 57.7142L23.0028 59.6472C22.9894 59.7413 22.9322 59.8912 22.7157 59.8921C22.7255 59.9004 22.1594 59.8931 22.1594 59.8931L22.0087 60.7739L23.0046 60.7718C23.1899 60.7716 23.3722 60.7742 23.5513 60.775L23.5535 62L24.3179 61.9985L24.316 60.7864C24.5259 60.7901 24.7291 60.7913 24.9274 60.7907L24.9289 61.9972L25.6941 61.9955L25.6925 60.7726C26.979 60.6988 27.879 60.3846 27.989 59.2204C28.0779 58.2829 27.6196 57.8656 26.889 57.6982C27.3324 57.4796 27.6092 57.0955 27.5433 56.4567C27.4549 55.5836 26.672 55.2925 25.684 55.2113ZM26.4767 59.0784C26.4785 59.9939 24.8513 59.8932 24.3326 59.8948L24.3304 58.2717C24.8492 58.2707 26.4753 58.1235 26.4767 59.0784ZM26.1173 56.7892C26.1183 57.6221 24.7612 57.5278 24.3292 57.5287L24.327 56.0566C24.759 56.0557 26.1158 55.9204 26.1173 56.7892Z"
          fill="#F09D0E"
        />
        <rect x="45" y="48" width="20" height="20" rx="2" fill="#EBEDFF" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M54.9993 56.6973L51.5 58.0935L54.9993 59.9072L58.4972 58.0935L54.9993 56.6973Z"
          fill="#454B74"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.5 58.0935L54.9993 59.9072V53L51.5 58.0935Z"
          fill="#454B74"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55 53V59.9072L58.4979 58.0935L55 53Z"
          fill="#454B74"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M51.5 58.6752L54.9993 63V60.4889L51.5 58.6752Z"
          fill="#454B74"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55 60.4889V63L58.5007 58.6752L55 60.4889Z"
          fill="#454B74"
        />
        <rect x="75" y="48" width="20" height="20" rx="2" fill="#F5F5F5" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M84.4867 60.7308L85.0572 58.5297L86.4077 58.024L86.7437 56.7304L86.7322 56.6983L85.4028 57.196L86.3606 53.5H83.6441L82.3915 58.3234L81.3456 58.7149L81 60.0486L82.0451 59.6574L81.3068 62.5H88.5365L89 60.7308H84.4867Z"
          fill="#666666"
        />
        <rect x="105" y="48" width="20" height="20" rx="2" fill="#E6FFF7" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M116.015 57.0231V55.8246H118.817V54H111.187V55.8246H113.99V57.0231C111.714 57.126 110 57.5664 110 58.0942C110 58.6219 111.714 59.0624 113.99 59.1652V63H116.017V59.1652C118.291 59.0624 120 58.6219 120 58.0942C119.998 57.5664 118.289 57.126 116.015 57.0231ZM116.017 58.841L115.989 58.8423H115.988C115.888 58.847 115.592 58.8611 115.013 58.8611C114.489 58.8611 114.123 58.8477 113.992 58.841V58.8432C111.981 58.756 110.478 58.4139 110.478 58.0047C110.478 57.5955 111.979 57.2534 113.992 57.1662V58.4989C114.125 58.5078 114.5 58.5302 115.022 58.5302C115.646 58.5302 115.96 58.5056 116.019 58.4989V57.1618C118.028 57.2489 119.526 57.5911 119.526 58.0002C119.522 58.4094 118.023 58.7515 116.017 58.841Z"
          fill="#26A17B"
        />
        <rect x="135" y="48" width="20" height="20" rx="2" fill="#F0F0F0" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M146.015 57.0231V55.8246H148.817V54H141.187V55.8246H143.99V57.0231C141.714 57.126 140 57.5664 140 58.0942C140 58.6219 141.714 59.0624 143.99 59.1652V63H146.017V59.1652C148.291 59.0624 150 58.6219 150 58.0942C149.998 57.5664 148.289 57.126 146.015 57.0231ZM146.017 58.841L145.989 58.8423H145.988C145.888 58.847 145.592 58.8611 145.013 58.8611C144.489 58.8611 144.123 58.8477 143.992 58.841V58.8432C141.981 58.756 140.478 58.4139 140.478 58.0047C140.478 57.5955 141.979 57.2534 143.992 57.1662V58.4989C144.125 58.5078 144.5 58.5302 145.022 58.5302C145.646 58.5302 145.96 58.5056 146.019 58.4989V57.1618C148.028 57.2489 149.526 57.5911 149.526 58.0002C149.522 58.4094 148.023 58.7515 146.017 58.841Z"
          fill="#26A17B"
        />
        <circle cx="145" cy="58" r="7" fill="#F0F0F0" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M147.978 54.5H149.201L146.797 56.8306C146.797 56.8306 146.12 57.6647 144.997 57.6647C143.873 57.6647 143.196 56.8306 143.196 56.8306L140.801 54.5H142.023L144.039 56.4626C144.039 56.4626 144.476 56.7979 144.997 56.7979C145.517 56.7979 145.955 56.4626 145.955 56.4626L147.978 54.5ZM142.023 61.5H140.801L143.204 59.1694C143.204 59.1694 143.882 58.3353 145.005 58.3353C146.128 58.3353 146.805 59.1694 146.805 59.1694L149.201 61.5H147.978L145.963 59.5374C145.963 59.5374 145.525 59.2021 145.005 59.2021C144.485 59.2021 144.047 59.5374 144.047 59.5374L142.023 61.5Z"
          fill="#24292F"
        />
        <rect width="170" height="40" rx="4" fill="#4305EB" />
        <path
          d="M36.1643 14.824V23.8H37.5923V20.416H39.8363C41.4563 20.416 42.6562 19.432 42.6562 17.62C42.6562 15.796 41.4563 14.824 39.8363 14.824H36.1643ZM37.5803 16.084H39.6563C40.5083 16.084 41.1923 16.588 41.1923 17.62C41.1923 18.64 40.5083 19.144 39.6563 19.144H37.5803V16.084ZM46.1298 17.536C44.5938 17.536 43.6818 18.628 43.6818 19.708L45.0378 19.756C45.0378 19.204 45.3738 18.712 46.1418 18.712C46.8978 18.712 47.2338 19.204 47.2338 19.996V20.176L45.7698 20.26C44.5098 20.332 43.5138 20.8 43.5138 22.12C43.5138 23.272 44.3418 23.92 45.5658 23.92C46.2498 23.92 46.8018 23.656 47.2338 23.248V23.8H48.5898V19.972C48.5898 18.4 47.7138 17.536 46.1298 17.536ZM47.2458 21.22V21.436C47.2458 22.372 46.6458 22.792 45.7938 22.792C45.2538 22.792 44.8698 22.612 44.8698 22.096C44.8698 21.544 45.3258 21.34 45.9618 21.304L47.2458 21.22ZM51.9737 26.86L55.8857 17.644H54.3857L52.7297 21.856L51.0737 17.644H49.5737L52.0097 23.368L50.4977 26.86H51.9737ZM68.9444 23.8L72.0764 14.824H70.5404L68.3324 21.268L66.1364 14.824H64.9604L62.7764 21.268L60.5564 14.824H59.0204L62.1524 23.8H63.3644L65.5484 17.452L67.7444 23.8H68.9444ZM73.7963 14.668C73.3403 14.668 72.9563 15.04 72.9563 15.508C72.9563 15.976 73.3283 16.348 73.7963 16.348C74.2643 16.348 74.6483 15.976 74.6483 15.508C74.6483 15.04 74.2643 14.668 73.7963 14.668ZM74.4683 23.8V17.644H73.1243V23.8H74.4683ZM79.0813 22.684C78.5293 22.684 78.0613 22.432 78.0613 21.628L78.0733 18.808H79.6453V17.644H78.0853L78.0973 15.556H76.7413L76.7293 17.644H75.5893V18.808H76.7293L76.7173 21.904C76.7053 23.296 77.5453 23.896 78.7573 23.896C79.1893 23.896 79.4293 23.86 79.6573 23.824V22.624C79.5133 22.648 79.3333 22.684 79.0813 22.684ZM82.2965 14.476H80.9525V23.8H82.2965V20.284C82.2965 19.432 82.8725 18.784 83.7245 18.784C84.5405 18.784 85.0685 19.348 85.0685 20.272V23.8H86.4245V20.092C86.4245 18.496 85.4285 17.536 84.0245 17.536C83.1605 17.536 82.5845 17.908 82.2965 18.34V14.476ZM96.7418 16.084V14.824H91.1018V23.8H92.5298V19.852H96.0098V18.592H92.5298V16.084H96.7418ZM99.4293 23.8V14.476H98.0853V23.8H99.4293ZM102.05 14.668C101.594 14.668 101.21 15.04 101.21 15.508C101.21 15.976 101.582 16.348 102.05 16.348C102.518 16.348 102.902 15.976 102.902 15.508C102.902 15.04 102.518 14.668 102.05 14.668ZM102.722 23.8V17.644H101.378V23.8H102.722ZM107.251 17.536C105.535 17.536 104.287 18.772 104.287 20.728C104.287 22.696 105.535 23.92 107.251 23.92C108.175 23.92 108.871 23.548 109.207 23.068V26.86H110.551V17.644H109.279V18.508C108.943 17.944 108.211 17.536 107.251 17.536ZM107.467 18.7C108.475 18.7 109.207 19.348 109.207 20.572V20.896C109.207 22.108 108.475 22.768 107.467 22.768C106.423 22.768 105.655 22.036 105.655 20.728C105.655 19.42 106.423 18.7 107.467 18.7ZM115.799 17.536C114.839 17.536 114.107 17.944 113.771 18.508V17.644H112.499V26.86H113.843V23.068C114.179 23.548 114.875 23.92 115.799 23.92C117.515 23.92 118.763 22.696 118.763 20.728C118.763 18.772 117.515 17.536 115.799 17.536ZM115.583 18.7C116.627 18.7 117.395 19.42 117.395 20.728C117.395 22.036 116.627 22.768 115.583 22.768C114.575 22.768 113.843 22.108 113.843 20.896V20.572C113.843 19.348 114.575 18.7 115.583 18.7ZM122.559 17.536C121.023 17.536 120.111 18.628 120.111 19.708L121.467 19.756C121.467 19.204 121.803 18.712 122.571 18.712C123.327 18.712 123.663 19.204 123.663 19.996V20.176L122.199 20.26C120.939 20.332 119.943 20.8 119.943 22.12C119.943 23.272 120.771 23.92 121.995 23.92C122.679 23.92 123.231 23.656 123.663 23.248V23.8H125.019V19.972C125.019 18.4 124.143 17.536 122.559 17.536ZM123.675 21.22V21.436C123.675 22.372 123.075 22.792 122.223 22.792C121.683 22.792 121.299 22.612 121.299 22.096C121.299 21.544 121.755 21.34 122.391 21.304L123.675 21.22ZM128.403 26.86L132.315 17.644H130.815L129.159 21.856L127.503 17.644H126.003L128.439 23.368L126.927 26.86H128.403Z"
          fill="white"
        />
      </svg>
    </a>
  );
}
