import { IconProps } from "@/types/icon";

export const AppleLogoIcon = ({
  width = 19,
  height = 19,
  fill = "currentColor",
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 214 217"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_308_2953)">
      <path d="M140 61.286C141.302 61.286 143.302 61.4401 146.023 61.7475C148.802 61.9933 151.942 62.6707 155.465 63.7782C158.977 64.8858 162.558 66.6707 166.198 69.1317C169.837 71.5939 173.198 75.0395 176.279 79.4698C175.977 79.6554 174.802 80.4857 172.767 81.9621C170.791 83.4396 168.547 85.5933 166.012 88.4242C163.477 91.1926 161.256 94.731 159.349 99.0395C157.5 103.285 156.57 108.362 156.57 114.269C156.57 121.038 157.744 126.761 160.093 131.439C162.5 136.115 165.268 139.899 168.419 142.791C171.628 145.684 174.465 147.806 176.93 149.161C179.465 150.453 180.814 151.13 181 151.192C180.942 151.437 180.477 152.822 179.616 155.345C178.756 157.807 177.395 161.007 175.547 164.945C173.756 168.821 171.407 172.882 168.512 177.129C165.86 180.882 163.116 184.482 160.279 187.929C157.5 191.375 154.442 194.174 151.116 196.328C147.837 198.543 144.14 199.651 140 199.651C136.861 199.651 134.174 199.282 131.954 198.543C129.733 197.806 127.605 196.944 125.57 195.959C123.593 195.036 121.407 194.206 119 193.467C116.593 192.728 113.605 192.359 110.023 192.359C105.337 192.359 101.419 192.974 98.2674 194.206C95.186 195.498 92.2558 196.76 89.4768 197.99C86.6977 199.221 83.4302 199.836 79.6628 199.836C73.9302 199.836 68.8721 197.559 64.4884 193.005C60.1744 188.452 55.7325 183.006 51.1627 176.668C47.6395 171.622 44.4419 165.807 41.5349 159.222C38.6395 152.638 36.3256 145.652 34.593 138.268C32.8721 130.884 32 123.5 32 116.116C32 104.3 34.2558 94.3622 38.7558 86.3008C43.2675 78.2393 49.0349 72.1471 56.0698 68.0242C63.1047 63.9012 70.407 61.8403 78 61.8403C82.0117 61.8403 85.7791 62.4863 89.2907 63.7782C92.8721 65.0702 96.1977 66.3935 99.2908 67.7481C102.372 69.0401 105.174 69.686 107.709 69.686C110.116 69.686 112.953 69.0087 116.221 67.6553C119.488 66.2404 123.105 64.8243 127.047 63.4094C131.058 61.9934 135.384 61.286 140 61.286ZM133.523 46.3332C130.442 50.0862 126.558 53.1943 121.872 55.6553C117.244 58.1174 112.86 59.348 108.721 59.348C107.86 59.348 107.023 59.2552 106.221 59.0708C106.163 58.8249 106.07 58.3935 105.954 57.7789C105.884 57.163 105.86 56.4869 105.86 55.7481C105.86 51.0708 106.872 46.5176 108.907 42.0873C110.942 37.6558 113.291 33.9643 115.942 31.0104C119.209 27.1334 123.349 23.9023 128.349 21.3183C133.407 18.7332 138.244 17.3496 142.872 17.1641C143.058 18.2102 143.151 19.4105 143.151 20.764C143.151 25.5027 142.256 30.1174 140.465 34.6103C138.674 39.0406 136.36 42.9479 133.523 46.3332Z" />
    </g>
    <defs>
      <filter
        id="filter0_d_308_2953"
        x="28"
        y="14.1641"
        width="157"
        height="190.672"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_308_2953"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_308_2953"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default AppleLogoIcon;
