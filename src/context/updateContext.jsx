import { createContext, useState } from 'react';
import PropsTypes from 'prop-types';

const initialState = {
  isUpdate: false,
};

export const updateCtx = createContext(initialState);

const UpdateContextProvider = ({ children }) => {
  const [isUpdate, setIsUpdate] = useState(initialState.isUpdate);

  return <updateCtx.Provider value={{ isUpdate, setIsUpdate }}>{children}</updateCtx.Provider>;
};

UpdateContextProvider.propTypes = {
  children: PropsTypes.node,
};

export default UpdateContextProvider;
