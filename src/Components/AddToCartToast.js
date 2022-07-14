import Toast from 'react-bootstrap/Toast';

function AddToCartToast({showToast, setToast}){
  return (
    <div>
      <Toast className="position-fixed rounded me-2" style={{zIndex:1}}
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={2200}
      >
        <Toast.Header>
          <strong className="me-auto">Order received</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>Nice, you added an item to your cart!</Toast.Body>
      </Toast>
    </div>  
  );
}

export default AddToCartToast;