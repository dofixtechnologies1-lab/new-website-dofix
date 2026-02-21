import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickViewServices } from "@/redux/features/quickViewService-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const SingleItem = ({ item }: { item: Category }) => {
  const { openModal } = useModalContext();
  const dispatch = useDispatch<AppDispatch>();

  // const handleQuickViewUpdate = () => {
  //   dispatch(updateQuickView({ ...item }));
  // };

  const handleQuickViewUpdate = () => {
  dispatch(
    updateQuickViewServices({
      id: item.id,
      title: item.title,
      // img: item.img,
    })
  );
};


  return (
    <button
      onClick={() => {
        openModal();
        handleQuickViewUpdate();
      }}
      id="newOne"
      aria-label="button for quick view"
      className="group flex flex-col items-center"
    >
     <div className="w-35 h-35 bg-[#e9e9e9] rounded-full flex items-center justify-center mb-4">
        <Image
          src={item.img}
          alt={item.title}
          width={100}
          height={62}
        />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark 
          bg-gradient-to-r from-[#3683ab] to-[#3683ab] 
          bg-[length:0px_1px] bg-left-bottom bg-no-repeat 
          transition-[background-size] duration-500 
          hover:bg-[length:100%_3px] 
          group-hover:bg-[length:100%_1px] 
          group-hover:text-[#3683ab]">
          
          {item.title}
          
        </h3>
      </div>
    </button>
  );
};

export default SingleItem;
