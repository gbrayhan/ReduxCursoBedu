import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import tareasActions from "../../actions/tareasActions";

const Tareas = props => {
  useEffect(() => {
    debugger
    console.log(props)
  })

  return (
    <div>
      Tareas Saludar
    </div>
  );
};

// Other way to connect redux
// const mapStateToProps = ({tareasReducer}) => tareasReducer;
// export default connect(mapStateToProps, tareasActions)(Tareas);


const mapStateToProps = ({tareasReducer,}) => {
  return {tareasReducer,};
};

const mapDispatchToProps = {
  ...tareasActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tareas);
