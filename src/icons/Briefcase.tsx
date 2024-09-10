import React from "react";

export type Props = {
  className?: string;
  height?: number;
  width?: number;
  color?: string;
};

export const Briefcase = React.memo((props: Props) => {
  const { width = 48, height = 48, className, color = "#fff" } = props;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 48 48"
      fill="none"
    >
      <g clip-path="url(#clip0_1_94)">
        <path
          d="M47.7482 40.4475H47.7482V13.8153V13.8083L47.7483 13.8083C47.8112 11.5551 46.0355 9.67755 43.7822 9.61474L43.7822 9.61474C43.6887 9.6121 43.595 9.61273 43.5014 9.61653L43.4912 9.61695V9.61674H33.9504H33.7004V9.36674V7.55234V7.54585L33.7005 7.54585C33.7616 5.19562 31.9059 3.24083 29.5557 3.17971L47.7482 40.4475ZM47.7482 40.4475L47.7483 40.4539L47.7482 40.4475ZM18.5564 3.17822H18.5563C16.2053 3.17738 14.2987 5.08262 14.2979 7.43369L18.5564 3.17822ZM18.5564 3.17822H29.4435C29.4806 3.17822 29.5179 3.17875 29.5556 3.17971L18.5564 3.17822ZM14.2996 7.55223H14.2995V9.36674V9.61674H14.0495H4.50874H4.49851L4.49852 9.61653C2.24623 9.52437 0.34571 11.2753 0.2534 13.5274L14.2996 7.55223ZM14.2996 7.55223L14.2994 7.54513M14.2996 7.55223L14.2994 7.54513M14.2994 7.54513C14.2984 7.50854 14.2979 7.47143 14.2979 7.43377L14.2994 7.54513ZM0.251801 13.8153H0.251702V40.4475V40.454L0.251617 40.454C0.19056 42.8042 2.04626 44.759 4.39646 44.8201C4.39651 44.8201 4.39655 44.8201 4.39659 44.8201L4.3901 45.07L0.251801 13.8153ZM0.251801 13.8153L0.251602 13.8083M0.251801 13.8153L0.251602 13.8083M0.251602 13.8083C0.248966 13.7147 0.249595 13.6211 0.253397 13.5275L0.251602 13.8083ZM18.4227 5.02314L18.4229 5.02312C18.467 5.02078 18.5117 5.01952 18.5568 5.01963M18.4227 5.02314L29.4435 5.26963V5.01963H29.4433C29.4432 5.01963 29.4432 5.01963 29.4431 5.01963L18.5568 5.01963M18.4227 5.02314C17.0929 5.09512 16.0726 6.22975 16.1408 7.55891L18.4227 5.02314ZM18.5568 5.01963H18.5564V5.26963L18.5571 5.01964C18.557 5.01964 18.5569 5.01963 18.5568 5.01963ZM43.625 42.9768L43.6248 42.9768C43.5806 42.9792 43.5358 42.9804 43.4906 42.9803M43.625 42.9768L43.4913 42.7303M43.625 42.9768C44.9549 42.9048 45.9752 41.7702 45.9071 40.441V32.7798V32.3181L45.5204 32.5705C44.9227 32.9606 44.2168 33.1514 43.5039 33.1155L43.5039 33.1152H43.4913H31.6093H31.3593V33.3652V36.7402C31.2621 37.3184 30.7816 37.7559 30.1959 37.7978H17.8041C17.2185 37.7559 16.738 37.3184 16.6408 36.7402V33.3652V33.1152H16.3908H4.50874V33.1149L4.49621 33.1155C3.78329 33.1513 3.07736 32.9605 2.47962 32.5705L2.093 32.3182V32.7798V40.4411C2.09088 40.4831 2.08975 40.5255 2.08987 40.5683M43.625 42.9768L4.50874 42.7303M43.4906 42.9803L43.4913 42.7303M43.4906 42.9803H43.4913V42.7303M43.4906 42.9803H4.50912M43.4913 42.7303H4.50874M4.50912 42.9803L4.50874 42.7303M4.50912 42.9803H4.50874V42.7303M4.50912 42.9803C3.175 42.9823 2.09194 41.9024 2.08987 40.5683M2.08987 40.5683C2.08987 40.5683 2.08986 40.5682 2.08986 40.5682L2.33986 40.5678L2.08987 40.5685C2.08987 40.5685 2.08987 40.5684 2.08987 40.5683ZM43.625 31.2703L43.6248 31.2703C43.5806 31.2727 43.5358 31.2739 43.4906 31.2738M43.625 31.2703L43.4913 31.0238M43.625 31.2703C44.9549 31.1983 45.9751 30.0637 45.9069 28.7344M43.625 31.2703L45.9069 28.7344M43.4906 31.2738L43.4913 31.0238M43.4906 31.2738H43.4913V31.0238M43.4906 31.2738H31.6091H31.3591V31.0238V28.507C31.3591 28.2983 31.2396 28.1192 31.0162 27.9803C30.7904 27.8399 30.4863 27.7619 30.2043 27.7619H17.7956C17.5137 27.7619 17.2096 27.8399 16.9837 27.9803C16.7603 28.1192 16.6408 28.2983 16.6408 28.507V31.0238V31.2738H16.3908H4.50912M43.4913 31.0238H31.8591H31.6091V30.7738V28.507C31.6091 27.8631 30.8482 27.5119 30.2043 27.5119H17.7956C17.1517 27.5119 16.3908 27.8631 16.3908 28.507V30.7738V31.0238H16.1408H4.50874M4.50912 31.2738L4.50874 31.0238M4.50912 31.2738H4.50874V31.0238M4.50912 31.2738C3.175 31.2758 2.09194 30.1959 2.08987 28.8618M4.50874 31.0238C3.31266 31.0256 2.34166 30.0574 2.33986 28.8613M2.33986 28.8613L2.08986 28.8617C2.08986 28.8617 2.08987 28.8618 2.08987 28.8618M2.33986 28.8613C2.33975 28.8212 2.34087 28.7811 2.343 28.7411M2.33986 28.8613L2.343 28.7411M2.33986 28.8613L2.08987 28.862C2.08987 28.862 2.08987 28.8619 2.08987 28.8618M2.33986 28.8613L2.08987 28.8618M2.343 28.7411V13.8153V28.7411ZM2.093 13.8229C2.01978 12.5916 2.95626 11.5321 4.18829 11.4545L4.18831 11.4545C4.29859 11.4476 4.40943 11.4487 4.51972 11.4582H43.4803C44.7077 11.3533 45.7905 12.2598 45.9018 13.488M2.093 13.8229L45.6569 13.8153M2.093 13.8229V28.7346V13.8229ZM45.9018 13.488L45.6528 13.5106L45.9018 13.488C45.9018 13.488 45.9018 13.488 45.9018 13.488ZM45.9018 13.488C45.9119 13.5994 45.9136 13.7115 45.9069 13.8229M45.9069 13.8229V13.8153H45.6569M45.9069 13.8229V28.7344M45.9069 13.8229C45.9068 13.8256 45.9066 13.8283 45.9065 13.831L45.6569 13.8153M45.6569 13.8153L45.9069 28.7344M18.4821 35.7064V35.9564H18.7321H29.268H29.518V35.7064V29.8532V29.6032H29.268H18.7321H18.4821V29.8532V35.7064Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_94">
          <rect width={width} height={height} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
});

Briefcase.displayName = "Briefcase";
