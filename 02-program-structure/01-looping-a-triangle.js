/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (i = 0; i < 7; i++) {
  let hash = "#";
  for (j = 0; j < i; j++) {
    hash += "#";
  }
  console.log(hash);
}
