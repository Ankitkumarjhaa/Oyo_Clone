import axios from "axios";
import { useEffect, useState } from "react";

const Filters = ({
  price,
  setPrice,
  handlePrice,
  checkedList,
  setCheckedList,
}) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckList = async (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setCheckedList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setCheckedList(newList);
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <>
      <div className="border-2 border-red-500 rounded-md m-2 p-3">
        <label htmlFor="price" className="text-lg font-bold block">
          Price:
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={1000}
          max={3500}
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price ? price : 0}
          className="block w-full"
        />
        <span className="block text-sm text-right">
          &#8377; {price ? price : ""}
        </span>
        <div className="mt-3">
          <button
            className="w-full h-10 bg-green-300 cursor-pointer"
            onClick={handlePrice}
          >
            Search
          </button>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold mb-2">Filter by Facilities:</h3>
          {list?.map((e) => (
            <label key={e} className="block mb-2">
              <input
                type="checkbox"
                name="checkbox"
                value={e}
                className="mr-2"
                onChange={handleCheckList}
              />
              {e}
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
