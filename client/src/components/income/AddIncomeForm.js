// import React, { useState } from "react";
// import Loader from "react-loader-spinner";
// import { connect } from "react-redux";
// import { addExpense } from "../../actions/expenseActions";
// import LoggedInNavBar from "../navbar/LoggedInNavBar";
// import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Paper from "@material-ui/core/Paper";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

// const useStyles = makeStyles(theme => ({
//   layout: {
//     width: "auto",
//     marginLeft: theme.spacing(2),
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
//       width: 600,
//       marginLeft: "auto",
//       marginRight: "auto"
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(3),
//     padding: theme.spacing(2),
//     [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
//       marginTop: theme.spacing(6),
//       marginBottom: theme.spacing(6),
//       padding: theme.spacing(3)
//     }
//   },
//   button: {
//     marginTop: theme.spacing(1),
//     marginLeft: theme.spacing(1)
//   }
// }));

// const AddExpenseForm = () => {
//   const classes = useStyles();

//   return (
//     <div>
//       <LoggedInNavBar />
//       <div>
//         <main className={classes.layout}>
//           <Paper className={classes.paper}>
//             <Typography variant="h6" gutterBottom>
//               Add New Expense
//             </Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="date"
//                   name="date"
//                   label="Date"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="category"
//                   name="category"
//                   label="Category"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="amount"
//                   name="amount"
//                   label="Amount"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="notes"
//                   name="notes"
//                   label="notes"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox color="secondary" name="paid" value="yes" />
//                   }
//                   label="check if paid"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   color="primary"
//                   className={classes.button}
//                 >
//                   Add Expense
//                 </Button>
//               </Grid>
//             </Grid>
//           </Paper>
//         </main>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   error: state.expense.error,
//   addingExpense: state.expense.addingExpense
// });

// export default connect(
//   mapStateToProps,
//   { addExpense }
// )(AddExpenseForm);
