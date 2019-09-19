import _ from 'lodash';


const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const item = _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  return item;
};
export default paginate;
