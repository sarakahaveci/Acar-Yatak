import React,{useState} from 'react'
import {makeStyles, TableCell, TableRow, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core'
import useBaseUrl from '../../useBaseUrl'
import axios from 'axios'

const useStyles = makeStyles((theme)=> ({
    root:{

    },
    heading:{

    },
    tblCell:{
        fontSize: theme.spacing(2)
    }

}))


const TableData = ({productData})=> {

    const [ open, setOpen ] = useState(false)
    const [ itemData, setItemData] = useState({})
    const classes = useStyles()
    const baseUrl = useBaseUrl()

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [price, setPrice] = useState(0)
    const [offerPrice, setOfferPrice] = useState(0)


    const handleEdit = (item)=> {
        console.log(item)
        setId(item._id)
        setName(item.name);
        setDescriptions(item.descriptions);
        setPrice(item.price)
        setOfferPrice(item.offerPrice)
        setOpen(true);
        
        
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = async()=> {
        const data = {
            name,
            descriptions,
            price,
            offerPrice
        }
        await updateSingleProduct(id, data)
        window.location.reload();
    }

    const handleDelete = async() => {
        try {
            const config = {
                headers :{
                  auth_token : localStorage.getItem("auth_token"),
                  
                }
              }
    
            const response = await axios.patch(`${baseUrl}/admin/products/${id}`, {}, config)
            window.location.reload();

        } catch (error) {
            console.log(error)
        }
    }

    const updateSingleProduct = async(id, data)=>{       
            try {

                const payload = {
                    name : data.name,
                    descriptions : data.descriptions,
                    price : data.price,
                    offerPrice : data.offerPrice
                }

                const config = {
                    headers :{
                      auth_token : localStorage.getItem("auth_token")
                    }
                  }
        
                const response = await axios.put(`${baseUrl}/admin/products/${id}`, payload, config)
                console.log(response)

            } catch (error) {
                console.log(error)
            }
    }


    return (
        <>
       
            
                {
                    productData.data && (
                        productData.data.map((item, i) =>(
                            <>
                            <TableRow>
                            <TableCell size='small'>
                            <Typography className={classes.tblCell} variant='h5'>
                                                {i+1}
                            </Typography>
                            </TableCell>
                            <TableCell size='small'>
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.name}
                                </Typography>
                            </TableCell>
                            <TableCell size='small'>
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.category}
                                </Typography >
                            </TableCell>
                            <TableCell size='small' >
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.price}
                                </Typography>
                            </TableCell>
                            <TableCell size='small' >
                                <Typography className={classes.tblCell} variant='h5'>
                                                    {item.offerPrice}
                                </Typography>
                            </TableCell>
                            <TableCell size='small' className={classes.tblCell}>
                                <div style={{width:"50px", height:"auto"}} >
                                    <img style={{width:"100%", height:"auto"}} src={ `${baseUrl}/${item.imageUrl}` } alt=""/>
                                </div>
                            </TableCell>
                            <TableCell size='small' >
                                
                                <Button onClick={ ()=> handleEdit(item) } size='small'>
                                                    Edit
                                </Button>
                            </TableCell>
                            </TableRow>
                            </>
                        ))
                    ) 
                }


            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{itemData.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        label="Product name"
                        fullWidth
                        onChange={ (e)=> setName(e.target.value)}
                        value={name}
                    />
                    <TextField
                        label="Descriptions"
                        fullWidth
                        multiline
                        row={2}
                        onChange={ (e)=> setDescriptions(e.target.value)}
                        value={descriptions}
                    />
                    <TextField
                        label="Price"
                        fullWidth
                        type="number"
                        onChange={ (e)=> setPrice(e.target.value)}
                        value={price}
                    />
                    <TextField
                        label="Offer price"
                        type="number"
                        fullWidth
                        onChange={ (e)=> setOfferPrice(e.target.value)}
                        value={offerPrice}
                    />


                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button color="secondary" onClick={handleDelete} >
                    Delete
                </Button>
                <Button onClick={handleUpdate} color="primary">
                    Update
                </Button>
                </DialogActions>
            </Dialog>
            
        </>
    )
}

export default TableData
