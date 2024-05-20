import React from "react";

const Demp = ({ data }) => {
  return (
    <>
      <table border={1}>
        {data.length > 0 ? (
          data.map((item, index) => {
            return (
              <>
                <th>name</th>
                <tr>{item.name}</tr>
              </>
            );
          })
        ) : (
          <>no data</>
        )}
      </table>
    </>
  );
};

export default Demp;
