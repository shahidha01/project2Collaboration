package com.niit.models;

public class ErrorClazz {
private int errorcode;
private String errormsg;

public ErrorClazz(int errorcode, String errormsg) {
	super();
	this.errorcode = errorcode;
	this.errormsg =errormsg;
}
public int getErrorcode() {
	return errorcode;
}
public void setErrorcode(int errorcode) {
	this.errorcode = errorcode;
}
public String getErrormsg() {
	return errormsg;
}
public void setErrormsg(String errormsg) {
	this.errormsg = errormsg;
}
}
