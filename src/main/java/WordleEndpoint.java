import jakarta.websocket.OnClose;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/wordle-duel")
public class WordleEndpoint {
    @OnOpen
    public void open(Session session) {
        System.out.println("Sessão " + session.getId() + " iniciada");
    }

    @OnClose
    public void close(Session session) {
        System.out.println("Sessão " + session.getId() + " encerrada");
    }
}
