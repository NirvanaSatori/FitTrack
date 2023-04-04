import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function DisplayTarget() {
  const [target, setTarget] = useState(null);
  const [editTarget, setEditTarget] = useState(null);

  useEffect(() => {
    fetch('/targets/:id')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTarget(data);
      })
      .catch(error => {
        console.error('There was a problem retrieving the target:', error);
      });
  }, []);

  const handleUpdateTarget = event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch(`/target/${editTarget.id}`, {
      method: 'PATCH',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTarget(data);
        setEditTarget(null);
      })
      .catch(error => {
        console.error('There was a problem updating the target:', error);
      });
  };

  const handleDeleteTarget = () => {
    fetch(`/targets/:id`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setTarget(null);
      })
      .catch(error => {
        console.error('There was a problem deleting the target:', error);
      });
  };

  return (
    <div className="mt-4">
      <h3>Target</h3>
      {!target && <p>No target found.</p>}
      {target && (
        <div className="mb-4">
          {editTarget ? (
            <Form onSubmit={handleUpdateTarget}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={target.name} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Current Weight</Form.Label>
                <Form.Control type="number" name="currentWeight" defaultValue={target.currentWeight} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Target Weight</Form.Label>
                <Form.Control type="number" name="targetWeight" defaultValue={target.targetWeight} required />
              </Form.Group>
              <Button variant="primary" type="submit" className="mr-2">
                Update
              </Button>
              <Button variant="secondary" onClick={() => setEditTarget(null)}>
                Cancel
              </Button>
            </Form>
          ) : (
            <div>
              <h4>{target.name}</h4>
              <p>Current Weight: {target.currentWeight}</p>
              <p>Target Weight: {target.targetWeight}</p>
              <Button variant="primary" onClick={() => setEditTarget(target)} className="mr-2">
                Edit
              </Button>
              <Button variant="danger" onClick={handleDeleteTarget}>
                Delete
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DisplayTarget;
