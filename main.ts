class MailSender {
  public send(subject: string): void {
    this.validate(subject);
    this.sendBySmtp(subject);
  }

  private validate(subject: string): void {
    if (subject === "") {
      throw new Error();
    }
  }

  private sendBySmtp(subject: string): void {
    const smtpConnector = new SmtpConnector();
    smtpConnector.connect();

    throw new Error("TODO()");
  }
}

class SmtpConnector {
  public connect() {}
}
