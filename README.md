 # Honeycomb Create Marker action
 
 This action creates a Marker in Honeycomb
 
 ## Inputs
 
 ### `X-Honeycomb-Team`
 **Required** The Team API Key for authentication
 
 ### `dataset`:
 **Required** The name of the dataset to create the marker in
 
 ### `type`:
 **Required** The type of marker to create
 
 ### `message`:
 **Required** The message to attach to the marker
 
 ### `url`:
 **Optional** The target for the marker
    
 ## Outputs
 
 ### `markerId`
 
 The identifier of the new marker
 
 ## Example usage
 
 ```yaml
 uses: beauknowssoftware/honeycomb-create-marker@v0.1.0
 with:
   X-Honeycomb-Team: my-api-key
   dataset: my-dataset
   type: deployment
   message: deploying commit ${{ github.sha }} to prod
```
