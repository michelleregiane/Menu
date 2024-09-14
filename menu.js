package com.example.restaurant;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/menu")
public class MenuServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<String> menuItems = new ArrayList<>();
        menuItems.add("Pizza Margherita - $10.99");
        menuItems.add("Spaghetti Carbonara - $12.99");
        menuItems.add("Caesar Salad - $8.99");
        menuItems.add("Tiramisu - $6.99");

        req.setAttribute("menuItems", menuItems);
        req.getRequestDispatcher("/index.jsp").forward(req, resp);
    }
}
